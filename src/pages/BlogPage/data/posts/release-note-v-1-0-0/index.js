import { P, SectionTitle } from "../../../components/PostDetail/components";
import { Post } from "@classes";

export default new Post ({
  intro: {en: "What's up in the first version of nklm?", vi: 'Có gì trong phiên bản đầu tiên của nklm'},
  tags: ["#release-notes"],
  title: {en: "Release notes v1.0.0", vi: "Nội dung cập nhật bản 1.0.0"},
  slug: "release-notes-v-1-0-0",
  previewImg: 'https://lh3.googleusercontent.com/pw/AM-JKLXNWTqhvgY9W_R5bQZlvYoj5j6NG9449Ptk5V7DGS8RkWNRKnbh_fQhPkUlRL4OsnSdDNdIaFvci8jyNn4BMKLtDelEihixAammLRz218-RxlNn2bIKTPwUELz229RwlpLNVaIGXoR_9NvrnT9fiYppPg=w796-h220-no?authuser=0',
  pageEn: [],
  pagesVi: [
    <>
      <P><SectionTitle>1. Home page</SectionTitle></P>
      <P>- Transform doggo: Interact with doggo to see what happen</P>
      <P>- Quick navigation: Base on your purpose of which you come here, you can navigate to other pages</P>
    </>,
    <>
      <P><SectionTitle>2. Portfolio</SectionTitle></P>
      <P>- View/Download CV: Have a quick view at my CV, can download it to view more</P>
      <P>- Projects: It has 2 part: products that I worked with, and my side projects. Can click to view projects' detail (url, source code, images)</P>
    </>,
        <>
        <P><SectionTitle>3. Blog</SectionTitle></P>
        <P>- 2 view mode: Line mode (like ordinary blog) and Card mode</P>
      </>,
    <>
      <P><SectionTitle>4. Squiggly</SectionTitle></P>
      <P>A place to show pictures that I drew: now there's 3</P>
    </>,
  ],
});
