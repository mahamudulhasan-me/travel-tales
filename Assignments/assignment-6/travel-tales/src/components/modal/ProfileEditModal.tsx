/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import envConfig from "@/config/envConfig";
import { useUser } from "@/context/userProvider";
import useUpdateUserMutation from "@/hooks/user/useUpdateUserMutation";
import { IUser } from "@/type/user.type";
import axios from "axios";
import { UserPen } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Label } from "../ui/label";
import Loader from "../ui/Loader";

export default function ProfileEditModal(): JSX.Element {
  const { user, isLoading, setIsLoading, setUser } = useUser();
  const [open, setOpen] = useState(false); // State to control modal open/close

  const imageBBApiUrl = `https://api.imgbb.com/1/upload?key=${envConfig.imagebbApiKey}`;

  const { register, handleSubmit, reset } = useForm<IUser>({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      status: user?.status || "",
      phone: user?.phone || "",
      address: user?.address || "",
      profileImage: user?.profileImage || "",
      coverImage: user?.coverImage || "",
      dateOfBirth: user?.dateOfBirth || "",
      bio: user?.bio || "",
    },
  });

  const {
    mutate: updateUser,
    isSuccess,
    data: userData,
  } = useUpdateUserMutation(user?._id as string);

  const onSubmit = async (data: IUser) => {
    setIsLoading(true);

    let profileImage = null;
    let coverImage = null;

    // If profile picture is selected, upload it
    //@ts-ignore
    if (data?.profilePicture[0]) {
      const profileImageFormData = new FormData();
      profileImageFormData.append("image", data.profilePicture[0]);

      const profileResponse = await axios.post(
        imageBBApiUrl,
        profileImageFormData
      );
      profileImage = profileResponse.data.data.url;
    }

    // If cover photo is selected, upload it
    //@ts-ignore
    if (data.coverPhoto[0]) {
      const coverImageFormData = new FormData();
      //@ts-ignore
      coverImageFormData.append("image", data.coverPhoto[0]);

      const coverResponse = await axios.post(imageBBApiUrl, coverImageFormData);
      coverImage = coverResponse.data.data.url;
    }

    const formData = {
      name: data.name,
      email: data.email,
      status: data.status,
      phone: data.phone,
      address: data.address,
      profileImage: profileImage,
      coverImage: coverImage,
      dateOfBirth: data?.dateOfBirth,
    };

    //@ts-ignore
    updateUser(formData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setUser(userData?.data); // Update user context with new data
      reset(); // Reset the form
      toast.success("Profile updated successfully");
      setOpen(false); // Close the modal on success
    }
  }, [isSuccess, reset, setUser, userData]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-x-2 bg-rose-100 text-rose-600 font-medium px-4 py-2 rounded-md text-sm"
        >
          <UserPen size={20} /> Edit Profile
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        {isLoading && <Loader />}
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4">
            <aside className="col-span-2">
              <Label htmlFor="name">Full Name*</Label>
              <input
                type="text"
                className="input-style"
                {...register("name", { required: true })}
              />
            </aside>
            <aside>
              <Label htmlFor="status">Status*</Label>
              <input
                type="text"
                className="input-style"
                {...register("status", { required: true })}
              />
            </aside>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <aside>
              <Label htmlFor="email">Email*</Label>
              <input
                type="email"
                className="input-style"
                {...register("email", { required: true })}
              />
            </aside>
            <aside>
              <Label htmlFor="phone">Phone</Label>
              <input
                type="text"
                className="input-style"
                {...register("phone")}
              />
            </aside>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <aside>
              <Label htmlFor="dob">Date of Birth</Label>
              <input
                type="date"
                className="input-style"
                {...register("dateOfBirth")}
              />
            </aside>
            <aside>
              <Label htmlFor="address">Address</Label>
              <input
                type="text"
                className="input-style"
                {...register("address")}
              />
            </aside>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <aside>
              <Label htmlFor="profilePicture">Profile Picture</Label>
              <input
                type="file"
                className="input-style"
                {...register("profilePicture")}
              />
            </aside>
            <aside>
              <Label htmlFor="coverPhoto">Cover Photo</Label>
              <input
                type="file"
                className="input-style"
                {...register("coverPhoto")}
              />
            </aside>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <aside>
              <Label htmlFor="bio">Bio</Label>
              <textarea className="input-style" {...register("bio")} />
            </aside>
          </div>
          <DialogFooter>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md font-semibold"
            >
              Save Changes
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
