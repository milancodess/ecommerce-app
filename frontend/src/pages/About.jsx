import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            repellendus error sapiente nobis numquam perspiciatis. Ipsum eius
            nulla facilis? Voluptatem rem placeat numquam vitae nam molestiae
            sunt molestias, officia explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab
            nihil commodi tempora vitae magnam corrupti explicabo labore
            quibusdam hic ea cum quidem architecto, beatae esse voluptatibus,
            pariatur, dolore fugiat?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus officiis consequatur ullam quas excepturi impedit
            expedita iste. Iure expedita cupiditate animi, cum quos illum,
            consequuntur sapiente neque fuga consectetur possimus!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flexx-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit
            fuga, adipisci voluptate ad quo placeat ullam voluptatibus maxime
            tenetur laudantium. Molestias consectetur esse, suscipit dolores
            tempora similique sapiente non!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vitae esse, velit excepturi asperiores facere explicabo iste
            perspiciatis omnis qui sunt quo magnam ipsa harum? Excepturi
            cupiditate commodi et consequuntur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quam a quidem optio, distinctio doloribus suscipit perferendis eaque
            iure modi nostrum delectus beatae eos? Beatae distinctio sunt
            molestias velit quibusdam.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
