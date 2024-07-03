export const getPartnerInfo = (users, senderEmail) => {
  return users.find((user) => user.email !== senderEmail);
};
