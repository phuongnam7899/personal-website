import { P, SectionTitle } from "../../../components/PostDetail/components";
import { Post } from "@classes";

export default new Post({
  intro: {
    en: "What's new in nklm 1.2.0?",
    vi: "Có gì mới trong phiên bản 1.2.0?",
  },
  tags: ["#release-notes"],
  title: { en: "Release notes v1.2.0", vi: "Nội dung cập nhật bản 1.2.0" },
  slug: "release-notes-v-1-1-0",
  previewImg:
    "https://lh3.googleusercontent.com/pw/AM-JKLUgeluZR5VEPtxU9AjBbwHFSoFxNX1pzBo-uFsBKMG4UtkQXPZSfQl5mZyAz_GNxPF-VdOISc0RDsw9k86gPQKYrwdt6EWI6hTwUyBxmlpO0JosKKkf4mPs8gzy4V3HhU4qKBuANDWuyb0a9KzRMh0n1w=w792-h220-no?authuser=0",
  pageEn: [],
  pagesVi: [
    <>
      <P>
        <SectionTitle>1. General</SectionTitle>
      </P>
      <P>- Thêm nút đổi ngôn ngữ (Áp dụng các trang trừ Portfolio)</P>
    </>,
    <>
      <P>
        <SectionTitle>2. Trang chủ</SectionTitle>
      </P>
      <P>- Update hiệu ứng mới cho ảnh ở Banner</P>
    </>,
    <>
      <P>
        <SectionTitle>2. Blog</SectionTitle>
      </P>
      <P>- Thêm 2 bài viết mới</P>
    </>,
  ],
});
