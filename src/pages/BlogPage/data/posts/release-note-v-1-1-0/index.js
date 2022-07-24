import { P, SectionTitle } from "../../../components/PostDetail/components";
import { Post } from "@classes";

export default new Post({
  intro: {
    en: "What's new in nklm 1.1.0?",
    vi: "Có gì mới trong phiên bản 1.1.0?",
  },
  tags: ["#release-notes"],
  title: { en: "Release notes v1.1.0", vi: "Nội dung cập nhật bản 1.1.0" },
  slug: "release-notes-v-1-1-0",
  previewImg:
    "https://lh3.googleusercontent.com/pw/AM-JKLWZpoXeWPGE09WWf94mOu5TSVDIMs_kEoBBp_jumJB8izsHvR84BnFiiLdqXHzffS9MaZ6J-xbwb3-5W9YB3dtptl9OqBmEjMJfP0Zgk7wWsSU0_0VggxVRZ6hs_Ppa05TKzIPILl_SYEkT6h-bIcEmcg=w762-h220-no?authuser=0",
  pageVi: [
    <>
      <P>
        <SectionTitle>1. Portfolio</SectionTitle>
      </P>
      <P>- CV: Thêm hiệu ứng loading khi CV đang được load</P>
      <P>- Sản phẩm: Thêm 1 số sản phẩm, chủ yếu là về UI/UX</P>
    </>,
    <>
      <P>
        <SectionTitle>2. Blog</SectionTitle>
      </P>
      <P>- Thêm ảnh minh họa cho các bài viết trong danh sách</P>
      <P>- Thêm mục bình luận để người dùng có thể đăng ẩn danh</P>
      <P>- Thêm 2 bài viết mới</P>
    </>,
  ],
  pagesEn: [
    <>
      <P>
        <SectionTitle>1. Portfolio</SectionTitle>
      </P>
      <P>- In CV viewer: Add loading effect while CV's being loaded</P>
      <P>- Projects: Add more projects, mainly on UI/UX</P>
    </>,
    <>
      <P>
        <SectionTitle>2. Blog</SectionTitle>
      </P>
      <P>- Add thumbnail images for articles that need</P>
      <P>
        - Add comments section in each article that alows annonymously comments
      </P>
      <P>- Add 2 more articles</P>
    </>,
  ],
});
