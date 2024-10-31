"use client";
/* eslint-disable @typescript-eslint/ban-ts-comment */

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
import useGetUserByIdQuery from "@/hooks/user/useGetUserByIdQuery";
import useUpdateUserMutation from "@/hooks/user/useUpdateUserMutation";
import { IUser } from "@/type/user.type";
import axios from "axios";
import { UserPen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Label } from "../ui/label";
import Loader from "../ui/Loader";

export default function ProfileEditModal(): JSX.Element {
  const { user, isLoading, setIsLoading, setUser } = useUser();
  const { data: uData, refetch } = useGetUserByIdQuery(user?._id as string);

  const [open, setOpen] = useState(false);

  const imageBBApiUrl = `https://api.imgbb.com/1/upload?key=${envConfig.imagebbApiKey}`;

  const { register, handleSubmit, reset } = useForm<IUser>();

  useEffect(() => {
    if (uData) {
      reset({
        name: uData?.name || "",
        email: uData?.email || "",
        status: uData?.status || "",
        phone: uData?.phone || "",
        address: uData?.address || "",
        profileImage: uData?.profileImage || "",
        coverImage: uData?.coverImage || "",
        dateOfBirth: uData?.dateOfBirth ? uData?.dateOfBirth.split("T")[0] : "",
        bio: uData?.bio || "",
      });
    }
  }, [uData, reset]);

  const [changedProfileImage, setChangedProfileImage] = useState(false);
  const [changedCoverImage, setChangedCoverImage] = useState(false);
  const [currentProfileImage, setCurrentProfileImage] = useState<string | null>(
    uData?.profileImage || null
  );
  const [currentCoverImage, setCurrentCoverImage] = useState<string | null>(
    uData?.coverImage || null
  );



  const {
    mutate: updateUser,
    isSuccess,
    data: userData,
  } = useUpdateUserMutation(uData?._id as string);

  const onSubmit = async (data: IUser) => {
    setIsLoading(true);

    // Initialize image variables
    let profileImage = currentProfileImage; // Default to existing profile image
    let coverImage = currentCoverImage; // Default to existing cover image

    // Check if a new profile image is uploaded
    if (
      changedProfileImage &&
      data.profileImage &&
      data.profileImage.length > 0
    ) {
      const profileImageFormData = new FormData();
      profileImageFormData.append("image", data.profileImage[0]);

      try {
        const profileResponse = await axios.post(
          imageBBApiUrl,
          profileImageFormData
        );
        profileImage = profileResponse.data.data.url; // Use the new URL if uploaded successfully
      } catch (error) {
        toast.error("Failed to upload profile image");
        setIsLoading(false);
        return;
      }
    }

    // Check if a new cover image is uploaded
    if (changedCoverImage && data.coverImage && data.coverImage.length > 0) {
      const coverImageFormData = new FormData();
      coverImageFormData.append("image", data.coverImage[0]);

      try {
        const coverResponse = await axios.post(
          imageBBApiUrl,
          coverImageFormData
        );
        coverImage = coverResponse.data.data.url; // Use the new URL if uploaded successfully
      } catch (error) {
        toast.error("Failed to upload cover image");
        setIsLoading(false);
        return;
      }
    }

    // Prepare the form data with updated or existing image URLs
    const formData = {
      name: data.name,
      email: data.email,
      status: data.status,
      phone: data.phone,
      address: data.address,
      profileImage: changedProfileImage ? profileImage : uData?.profileImage, // Will use either new or existing
      coverImage: changedCoverImage ? coverImage : uData?.coverImage, // Will use either new or existing
      dateOfBirth: data.dateOfBirth,
      bio: data.bio,
    };

    // Update the user
    updateUser(formData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setUser(userData?.data); // Update user context with new data
      reset(); // Reset the form
      toast.success("Profile updated successfully");
      setOpen(false); // Close the modal on success
      refetch();
    }
  }, [isSuccess, refetch, reset, setUser, userData]);

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
                disabled
                {...register("status", { required: true })}
              />
            </aside>
          </div>

          {/* Image Previews */}
          <div className="grid grid-cols-2 gap-4">
            <aside>
              <Label htmlFor="profilePicture">Profile Picture</Label>
              {currentProfileImage && (
                <Image
                  width={200}
                  height={200}
                  src={currentProfileImage}
                  alt="Current Profile"
                  className="w-20 h-20 rounded-full"
                />
              )}
              <input
                type="file"
                className="input-style"
                {...register("profileImage")}
                onChange={() => setChangedProfileImage(true)}
              />
            </aside>

            <aside>
              <Label htmlFor="coverPhoto">Cover Photo</Label>
              {currentCoverImage && (
                <Image
                  width={400}
                  height={200}
                  src={currentCoverImage}
                  alt="Current Cover"
                  className="w-full h-32 object-cover"
                />
              )}
              <input
                type="file"
                className="input-style"
                {...register("coverImage")}
                onChange={() => setChangedCoverImage(true)}
              />
            </aside>
          </div>

          {/* Other Inputs */}
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
