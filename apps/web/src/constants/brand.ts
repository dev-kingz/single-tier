interface IBrand {
  name: string;
  slogan: string;
  whiteIcon: string;
  blackIcon: string;
  socials: {
    facebook?: string;
    tiktok?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const Brand = {
  name: "DevKingz",
  slogan: "Turning Dreams into Reality!",
  whiteIcon: "/icons/white.png",
  blackIcon: "/icons/black.png",
  socials: {
    facebook: "https://facebook.com/anda",
    tiktok: "https://tiktok.com/anda",
    instagram: "https://instagram.com/anda",
    linkedin: "https://linkedin.com/anda",
  },
};
