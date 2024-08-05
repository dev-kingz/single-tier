import TitleHeader from "@/components/headers/title-header";
import React from "react";
import ImageTextCol from "@/components/columns/image-text-col";

const AboutUsPage = () => {
  return (
    <main>
      <TitleHeader
        title="About Us"
        subTitle="Get to know us!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "About Us", currentPage: true},
        ]}
      />

      <ImageTextCol
        title="Our Story"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a eros ex. Pellentesque nec commodo nunc, pulvinar sagittis velit. Nulla placerat magna a nibh blandit vulputate. Ut euismod aliquet neque a lacinia. Integer in mollis nulla. Curabitur vitae tempor lorem, vel ornare ante. Proin eu mollis enim, eu posuere magna.Pellentesque vel ornare sem. Morbi non ultricies velit. Mauris vitae suscipit dui. Duis varius elementum interdum. Proin tristique imperdiet aliquet. Fusce eu vehicula arcu. Sed magna lacus, varius a sem eget, dapibus faucibus nibh. Aliquam consectetur lorem lorem.Cras id porta leo. Vestibulum nec ligula ac est bibendum aliquet quis ac odio. Sed sit amet mi viverra tellus semper aliquam at id purus. Nam id justo sodales ipsum pharetra facilisis quis id diam. Nam faucibus metus vel neque sodales egestas."
        src="/images/placeholder-image.jpg"
        alt="Placeholder Image"
        width={500}
        height={300}
      />
    </main>
  );
};

export default AboutUsPage;
