import Container from "@/components/Container";
import DeliveryServices from "@/components/DeliveryServices";
import { BlogCardLg, BlogCardSm } from "@/components/home/BlogCard";
import PageHero from "@/components/PageHero";
import { PageNavigateBtns } from "@/components/shop/AllProducts";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import React from "react";

const blogs = [
  {
    title: "Amazing Fashion Week",
    imagePath: "/blogs/Rectangle 68.png",
    tag: "Wood",
  },
  {
    title: "Exploring new ways of decorating",
    imagePath: "/blogs/Rectangle 68 (1).png",
    tag: "Handmade",
  },
  {
    title: "Handmade pieces that took time to make",
    imagePath: "/blogs/Rectangle 68 (2).png",
    tag: "Wood",
  },
];

const blogSm = [
    {
        title: "Going all-in with millennial design",
        imagePath: "/blogs/Rectangle 69.png",
      },
    {
        title: "Exploring new ways of decorating",
        imagePath: "/blogs/Rectangle 69 (1).png",
      },
    {
        title: "Handmade pieces that took time to make",
        imagePath: "/blogs/Rectangle 69 (2).png",
      },
    {
        title: "Modern home in Milan",
        imagePath: "/blogs/Rectangle 69 (3).png",
      },
    {
        title: "Colorful office redesign",
        imagePath: "/blogs/Rectangle 69 (4).png",
      },
    ]

function BlogsPage() {
  return (
    <div className="w-full">
      <PageHero name="Blogs" />

      <Container className="px-4 my-10">
        <div className="md:hidden mt-4 mb-9 flex items-center justify-between gap-3 max-sm:flex-col">
          <span className="flex justify-between items-center h-12 px-7 w-52  max-sm:order-2 max-sm:w-60 bg-gray-50 border border-black/60 rounded-xl tracking-widest">Categries <ChevronDown /></span>
        <div className="relative w-fit h-fit md:hidden max-sm:order-1">
                    <Input className="rounded-xl lg:w-80 md:w-full w-60 h-12 m-0"/>
                    <Search className="absolute top-1/2 transform -translate-y-1/2 right-3"/>
                </div>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-2">
          <div className="md:col-span-2 col-span-1 w-full flex flex-col gap-2 h-full">
            {blogs.map((blog, index) => (
              <BlogCardLg key={index} {...blog} />
            ))}
            // TODO: make this functional
                    <PageNavigateBtns currentPage={0} onPageChange={()=>{}} totalPages={32} className="mb-3 mt-5" />
          </div>
          <div className="col-span-1 w-full h-full py-5">
            <div className="flex flex-col items-center gap-10">
                <div className="relative w-fit h-fit max-md:hidden ">
                    <Input className="rounded-xl lg:w-80 md:w-full w-60 m-0"/>
                    <Search className="absolute top-1/2 transform -translate-y-1/2 right-3"/>
                </div>
                <div className="w-60 space-y-6 max-md:hidden">
                    <h3 className="text-black text-2xl font-medium">Categories</h3>
                    <div className="flex justify-between text-[#9F9F9F]"><span>Crafts</span><span>2</span></div>
                    <div className="flex justify-between text-[#9F9F9F]"><span>Design</span><span>8</span></div>
                    <div className="flex justify-between text-[#9F9F9F]"><span>Handmade</span><span>7</span></div>
                    <div className="flex justify-between text-[#9F9F9F]"><span>Interior</span><span>1</span></div>
                    <div className="flex justify-between text-[#9F9F9F]"><span>Wood</span><span>6</span></div>
                </div>
                <div className="md:w-60 w-full space-y-8">
                    <h3 className="text-black text-2xl font-medium ">Recent Posts</h3> 
                    <div className="md:space-y-8 max-md:flex w-full gap-4 max-md:py-4 max-md:overflow-x-scroll">   
                        {blogSm.map((blog, index) => (
                            <div key={index} >
                            <BlogCardSm {...blog} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
          </div>
        </div>
      </Container>

      <DeliveryServices />
    </div>
  );
}

export default BlogsPage;
