import {
  Image,
  P,
  SectionTitle,
} from "../../../components/PostDetail/components";
import { Post } from "@classes";
export default new Post({
  intro: {
    en: "",
    vi: "1 công cụ đơn giản giúp tìm ra những nguyên nhân gốc rễ của 1 vấn đề phức tạp",
  },
  tags: ["#problem-solving"],
  title: { en: "", vi: "Biểu đồ xương cá (Biểu đồ Ishikawa)" },
  slug: "fish-bone-diagram",
  pagesEn: [],
  previewImg:
    "https://lh3.googleusercontent.com/pw/AM-JKLXjMCSeV-YVqcXHyDe32sOSxu6RXe2G1RfqidK8RaLJ4Qxf-kwflWBovSnHLF8nyUGAxFSnJIUrPxqJ2eTw6B4EKuThe9bpdeUp27y9EgGG_ClIrgNbO7b9_4xv-oYamuIQgDczxpKWUZq4c9tRV6SNWg=w1920-h780-no?authuser=0",
  pagesVi: [
    <>
      <P>
        <b>
          Ê nếu bây giờ ông đã bao giờ gặp phải 1 vấn đề mà nghe có vẻ ngắn gọn
          nhưng khi động vào thì lại chẳng biết phải bắt đầu từ đâu chưa?
        </b>
      </P>
      <P>
        Hmm... Tui thấy là đa số các vấn đề mà nghe ngắn gọn và không rõ ràng
        mới là khó để bắt tay vào giải quyết, còn khi mà ông đã nêu ra được vấn
        đề trên 1 cách chi tiết và rõ ràng, tức là khi đấy ông đã tìm ra được
        các nguyên nhân gốc rễ của vấn đề đó rùi
      </P>
    </>,
    <>
      <P>
        <b>
          Nghe lý thuyết thế:v Vậy giờ làm sao để nêu được 1 cách chi tiết
          nguyên nhân của vấn đề?
        </b>
      </P>
      <P>Ông đã nghe đến "Biểu đồ xương cá" bao giờ chưa?</P>
      <P>
        <b>Nghe tên gì ngộ vậy:v</b>
      </P>
      <P>
        Tên gốc của nó là "Biểu đồ Ishikawa", đặt theo tên của ông người Nhật đã
        nghĩ ra nó
      </P>
      <P>
        <b>
          Nghe đến xương cá làm tui hình dung ra 1 cái đầu cá với cái xương sống
          ở giữa sau đó có thêm mấy cái xương tủa tủa ra xung quanh:v Thế giờ
          dùng nó thế nào?
        </b>
      </P>
    </>,
    <>
      <P>
        Ông mô tả cũng đúng rồi đấy, cơ bản thì có 3 bước, đầu tiên mình sẽ viết
        ra vấn đề đang gặp phải, và đặt nó tương ứng là đầu cá và xương sống như
        thế này (Tui dùng Tiếng Anh trong ảnh để đỡ tốn diện tích nhé):
      </P>
      <Image src="https://lh3.googleusercontent.com/pw/AM-JKLUng66mL3HDikF5wH-Rq46F_BCrsib8ge2oGafCVwbSpjlf2oLeqLhAG8dv98VGeUx91ySdMvifA6GSkXOrpOlitBOlEX_dRen3V9N-tLpWtHv87QXrQY3HHQO3Wo8ROKXxb-RKPhD5ziuhOm7JYW0vlQ=w1922-h584-no?authuser=0" />
    </>,
    <>
      <P>
        Sau đó là bước xác định nhứng nhân tố có gây ảnh hưởng đến vấn đề đó, và
        đặt nó làm các xương mọc ra từ xương sống
      </P>
      <Image src="https://lh3.googleusercontent.com/pw/AM-JKLV5xNs15l-0qMzVMMtwhvicUdEY5aRy6i3YTbFI_0uxWbUJRb2PTWba6s6Sua98kDSdAwhLaDKUyDnZHZCQHm7RpgWKDHbZ7kLI_RynkH0vWaOdj20DOYBi23XDmwLVvYed1oSytPXKeJ0aUk0MYxr2nA=w1749-h893-no?authuser=0" />
    </>,
    <>
      <P>
        Sau đó với mỗi nhân tố trên, ta sẽ liên hệ với vấn đề mình đang cần giải
        quyết để xem nó đã tác động như thế nào đế vấn đề của mình, đó chính là
        các nguyên nhân sâu xa hơn của vấn đề:
      </P>
      <Image src="https://lh3.googleusercontent.com/pw/AM-JKLX8OkOJaWIYwrns_gpiGj11RcHj-sfH8w5q4Z6bUGKUbf5cW-e0YgvvU4odkEjX9P8YbmI5I5PcQwXGVSMRuu3YCj-lNDjPFWN2ha2ApMA02bVBfYlzI7CsLKS4S4IF7Y8WBe9cGvGMCzDrQZ8uFm0uIA=w1749-h893-no?authuser=0" />
    </>,
    <>
      <P>
        Như vậy là từ vấn đề ban đầu, mình đã tìm được ra 1 số các nguyên nhân
        liên quan đến các nhân tố có ảnh hưởng đến nó, việc của mình bây giờ là
        giải quyết hết các nguyên nhân liên quan đó thôi, trong trường hợp
        nguyên nhân phụ (sub-cause) sau khi đã chia ra kia mà vẫn còn phức tạp
        để giải quyết (thường là đúng vậy), mình có thể tiếp tục các bước đã nêu
        trên để tìm ra nguyên nhân cốt lõi hơn nữa, đến khi cái nguyên nhân sau
        khi chia ra có thể hình dung về việc giải quyết được ngay thì dừng lại
      </P>
    </>,
    <>
      <P>
        <b>
          Hmm.. tui nghe thì thấy 2 bước đầu thì cũng dễ hiểu, cơ mà chưa hình
          dung ra bước 3 áp dụng thật sẽ như thế nào, ví dụ tui đang làm chủ một
          trung tâm dạy học và vấn đề là mấy tháng gần đây học sinh đăng ký học
          ít hơn hẳn đợt trước, thì thui phải ứng dụng sao?
        </b>
      </P>
      <P>
        Okay... đầu tiên là xương sống vấn đề sẽ như ông vừa nói là "Học viên
        đăng ký ít hơn". Sau đó tìm ra các nhân tố ảnh hưởng, ví dụ là "Cơ sở
        vật chất", "Giảng viên", "Chương trình học", "Marketing", "Sales" "Đối
        thủ". Sau đó cuối cùng là tìm ra các nguyên nhân mà từng yếu tố ảnh
        hưởng đế vấn đề của mình (vấn đề của cơ sở vật chất là gì, vấn đề của
        giảng viên là gì,...), kết quả đại khái sẽ trông kiểu như thế này:
      </P>
    </>,
    <>
      <Image src="https://lh3.googleusercontent.com/pw/AM-JKLVgr5oBfB8UKqiN4nQwPKtck1PMDQdk5uUuLIfJDTIA5tLtQURcqw4ue3SEzcLCjAnAFmwu15P8S4wC_N_IPHpX32zsJ09hEU_doCHau8imaFGb5EtJPAR06RjPnZt25-43uH5FD-awoYjm63qlffUtyw=w1920-h867-no?authuser=0" />
    </>,
    <>
      <P>
        Sau đó có thể làm tương tự với 1 vấn đề nhỏ hơn nếu vẫn chưa thể đưa ra
        1 action rõ ràng, ví dụ như "Hiệu suất chuyển đổi L3 thấp" hay "Fanpage
        không hiệu quả".
      </P>
      <P>
        <b>
          Có vẻ tui hiểu hơn rùi đó, như này mình có thể nhìn vấn đề theo nhiều
          hướng khác nhau cho từng nhân tố thay vì cứ chỉ nhìn theo 1 nguyên
          nhân nhỉ
        </b>
      </P>
      <P>
        Đúng rùi. Còn 1 số sơ đồ xương cá đã được người ta thiết kế theo các mô
        hình thông dụng mà ông có thể tự tìm mà đọc thêm, ví dụ như trong ngành
        dịch vụ thì có mô hình xương cá kiểu 4S, mô hình xương cá kiểu 8P; ngành
        sản xuất thì có mô hình kiểu Man-machine-material;...
      </P>
      <P>
        <b>Okeoke để tui xử lý tiếp, xincamon</b>
      </P>
    </>,
  ],
});
