import { P, SectionTitle } from "../../../components/PostDetail/components";
import { Post } from "@classes";

export default new Post({
  intro: {
    en: "What's new in nklm 1.3.0?",
    vi: "Có gì mới trong phiên bản 1.3.0?",
  },
  tags: ["#release-notes"],
  title: { en: "Release notes v1.3.0", vi: "Nội dung cập nhật bản 1.3.0" },
  slug: "release-notes-v-1-1-0",
  previewImg:
    "https://lh3.googleusercontent.com/pw/AMWts8D1d7skdp1BuPsdS7ZyFmf_MQ2xijVxa8jSR4Ee8HFK8Xd7knYVSNZSrGtrojFVdHjpvCJPpru5bVtVghtZQxVZWCRBaVfG-KlozN9sLYHE8vGtTXWVXgCYJqSXonB_V4zxAh1VYLpwLXNEETpiGS6lBg=w790-h220-s-no",
  pageEn: [],
  pagesVi: [
    <>
      <P>
        <SectionTitle>1. About nklm</SectionTitle>
      </P>
      <P>- Cuối cùng cũng được thêm vào</P>
    </>,
    <>
      <P>
        <SectionTitle>2. Portfolio</SectionTitle>
      </P>
      <P>- Cập nhật CV </P>
      <P>- Cập nhật projects </P>
    </>,
    <>
      <P>
        <SectionTitle>3. Blog</SectionTitle>
      </P>
      <P>- Thêm 1 bài viết mới</P>
    </>,
  ],
});
