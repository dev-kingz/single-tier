interface IBrand {
  name: string;
  slogan: string;
  description: string;
  email: string;
  url?: string;
  socials: {
    facebook?: string;
    tiktok?: string;
    instagram?: string;
    linkedin?: string;
  };
  preview?: string;
  logo: string;
  whiteLogo?: string;
  blackLogo?: string;
  whiteIcon: string;
  blackIcon: string;
}

export const Brand = {
  name: "DevKingz",
  slogan: "Turning Dreams into Reality!",
  description: "DevKingz takes pride in crafting impactful websites that are tailored to your business needs. With our focus on cutting-edge technology and personalized solutions, we ensure your business stands out in the digital realm.",
  email: "contact@devkingz.com",
  url: "https://devkingz.com",
  socials: {
    facebook: "https://facebook.com/anda",
    tiktok: "https://tiktok.com/anda",
    instagram: "https://instagram.com/anda",
    linkedin: "https://linkedin.com/anda",
  },
  preview: "/preview/image.png",
  logo: "/logos/image.png",
  whiteIcon: "/icons/white.png",
  blackIcon: "/icons/black.png",
};
