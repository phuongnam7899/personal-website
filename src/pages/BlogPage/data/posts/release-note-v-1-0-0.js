import { P, SectionTitle } from "../../components/PostDetail/components";

export default {
  intro: "What's up in the first version of nklm?",
  tags: ["#release-notes"],
  title: "Release notes v1.0.0",
  slug: "release-notes-v-1-0-0",
  pages: [
    <>
      <SectionTitle>1. Home page</SectionTitle>
      <P>- Transform doggo: Interact with doggo to see what happen</P>
      <P>- Quick navigation: Base on your purpose of which you come here, you can navigate to other pages</P>
    </>,
    <>
      <SectionTitle>2. Portfolio</SectionTitle>
      <P>- View/Download CV: Have a quick view at my CV, can download it to view more</P>
      <P>- Projects: It has 2 part: products that I worked with, and my side projects. Can click to view projects' detail (url, source code, images)</P>
    </>,
        <>
        <SectionTitle>3. Blog</SectionTitle>
        <P>- 2 view mode: Line mode (like ordinary blog) and Card mode</P>
      </>,
    <>
      <SectionTitle>4. Squiggly</SectionTitle>
      <P>- Foxaru</P>
      <P>- Haughty Neko</P>
      <P>- Le Petit Prince</P>
    </>,
  ],
};
