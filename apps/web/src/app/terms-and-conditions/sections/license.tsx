import SectionHeader from "@/components/headers/section-header";
import React from "react";

const License = () => {
  return (
    <section className="LicenseSection flexit-it flex-col px-8 py-4 sm:px-48">
      <SectionHeader title="License" />
      <p className="Text">
        Unless otherwise stated, DigiLearn and/or its licensors own the intellectual property rights
        for all material on DigiLearn. All intellectual property rights are reserved. You may access
        this from DigiLearn for your own personal use subjected to restrictions set in these terms
        and conditions.
        <br />
        <br />
        You must not:
        <br />
        <br />
      </p>
      <ul className="List list-disc">
        <li>
          <p>Republish material from DigiLearn</p>
        </li>
        <li>
          <p>Sell, rent or sub-license material from DigiLearn</p>
        </li>
        <li>
          <p>Reproduce, duplicate or copy material from DigiLearn</p>
        </li>
        <li>
          <p>Redistribute content from DigiLearn</p>
        </li>
      </ul>
      <br />
      <p className="Text">
        Parts of this website offer an opportunity for users to post and exchange opinions and
        information in certain areas of the website. DigiLearn does not filter, edit, publish or
        review Comments prior to their presence on the website. Comments do not reflect the views
        and opinions of DigiLearn,its agents and/or affiliates. Comments reflect the views and
        opinions of the person who post their views and opinions. To the extent permitted by
        applicable laws, DigiLearn shall not be liable for the Comments or for any liability,
        damages or expenses caused and/or suffered as a result of any use of and/or posting of
        and/or appearance of the Comments on this website.
        <br />
        <br />
      </p>
    </section>
  );
};

export default License;
