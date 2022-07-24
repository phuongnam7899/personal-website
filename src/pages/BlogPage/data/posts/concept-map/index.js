import {
  HighlightedText,
  Image,
  P,
  SectionTitle,
} from "../../../components/PostDetail/components";
import { Post } from "@classes";
export default new Post({
  intro: {
    en: "A tool to visualize the relationship of entities in a concept/system",
    vi: " 1 công cụ đơn giản (hoặc không) để trực quan hóa mối quan hệ giữa các phần trong 1 khái niệm hoặc hệ thống",
  },
  tags: ["#thinking"],
  title: { en: "Concept map", vi: "Concept map" },
  slug: "concept-map",
  previewImg:
    "https://lh3.googleusercontent.com/pw/AM-JKLVHE7zjkXcOTPfh7unMQwN7FWWCPM4W6kN3wNGFrtA-oAZnRUZyJo5m8_YOCsQj4Ac9HVX9Za6bguZEjyuYtDqySr-liCuhVzy7J8-N11wKmH2Gvdzej7PpC0Ytq2V4dj41m-4fPCGAeC8-OmG7tUI9pQ=w905-h893-no?authuser=0",
  pagesEn: [],
  pagesVi: [
    <>
      <P>
        <b>
          nlm: Haiz, nay tui onboard công ty mới mà thấy khác với công ty
          startup cũ mà tui làm quá. Ở công ty cũ team có vài người, trên tui
          chỉ có mỗi anh PM kiêm CTO nữa, mà nay ngồi nghe giới thiệu một hồi về
          công ty với về dự án mới xong tui chẳng hình dung được tui đang nằm ở
          đâu trong cái hệ thống đó luôn. Xong rồi quay sang hỏi anh đồng nghiệm
          vào làm được 1 năm rồi, ổng bảo cả năm chỉ có nhận task rồi làm, cũng
          chẳng có thời gian care mấy cái đó nữa. Nghe xong mà hoang mang tột độ
          @@
        </b>
      </P>
      <P>
        nklm: Hmm... Hiện tượng này là bình thường khi gặp liên tiếp các thứ mới
        mà chưa liên kết được với nhau thui. Giống như kiểu tự nhiên đi du lịch
        ở 1 tỉnh khác rồi không biết đường xá ra sao á
      </P>
    </>,
    <>
      <P>
        <b>
          nlm: Khác chứ nhỉ, giờ mà tui đi qua tỉnh khác xong dùng Google Maps
          thì vẫn nắm được đường xá bình thường chứ, giờ giống kiểu Robinson
          trên đảo hoang hơn:v
        </b>
      </P>
      <P>
        nklm: Không có bản đồ thì vẽ 1 cái là được mà:v Trước tui có đọc về 1
        cái gọi là Concept Map, có vẻ sẽ dùng được với ông đấy
      </P>
    </>,
    <>
      <P>
        <b>nlm: Map này có quận huyện phường xã đường xá ngõ ngách không:v</b>
      </P>
      <P>
        nklm: Tất nhiên là khôn:v mà nguyên lý của nó cũng gần giống với của bản
        đồ á. Đầu tiên cũng giống như việc tạo nên một tấm bản đồ bình thường,
        ông cần xác định một{" "}
        <HighlightedText>Câu hỏi trọng tâm</HighlightedText> - câu hỏi mà mình
        mong muốn được giải đáp sau khi xem bản đồ, vì nó sẽ ảnh hưởng đến nội
        dung của bản đồ, câu hỏi này giống như một ngọn hải đăng vậy.
      </P>
      <P>
        {" "}
        Ví dụ như bản đồ của Google Maps thì mục đích là để xem đường, câu hỏi
        người ta đặt ra trong đầu khi nhìn nó là "Làm sao để đến đường X?", "Tôi
        đang ở gần quán A hay quán B hơn?",... Nên trông sẽ khác so với bán đồ
        tạo ra với câu hỏi "Địa hình ở khu vực này như thế nào? Đồi núi hay đồng
        bằng?" hay với câu hỏi "Nơi nào tập trung nhiều mỏ quặng sắt?".{" "}
      </P>
    </>,
    <>
      <P>
        <b>
          nlm: Hmm... Trường hợp tui câu hỏi sẽ là "Mình đang nằm ở đâu so với
          công ty mình?". Rồi sao nữa?
        </b>
      </P>
      <P>
        nklm: Sau đó hãy liệt kê tất cả các{" "}
        <HighlightedText>thành phần</HighlightedText> thuộc cái hệ thống hay
        khái niệm mà mình đang muốn vẽ bản đồ, sau đó nếu được hãy sắp xếp chúng
        theo một thứ tự nào đó (thời gian, độ lớn,...), ví dụ trong trong trường
        hợp ở công ty tui sẽ là thế này, thực tế sẽ phức tạp hơn nhưng tui muốn
        ví dụ này đơn giản thôi:
      </P>
    </>,
    <>
      <Image src="https://lh3.googleusercontent.com/pw/AM-JKLXWpEKM18ouPDNNBNXIGQHBd4iAHHKk1Agb-r2OjTUFKW1K5JyqI0J-ZqJe20AFqjrq_cQSam_Yd06smB2wJN3U392vgPe8Dh8jgJ7Z9FKPZivWKRsmpNGy-tfBKk86cDgG70WbQr0O0PWfEryPCqHIVQ=w1018-h670-no?authuser=0" />
    </>,
    <>
      <P>
        <b>
          nlm: Oh giống kiểu có các địa danh nhỉ, xong giờ nối mấy cái thành
          phần đó lại đúng khum?
        </b>
      </P>
      <P>
        nklm: Dù không phải là cách duy nhất, nhưng đó cũng là 1 cách rất phổ
        biến để biểu thị, <HighlightedText>mối liên hệ</HighlightedText> giữa
        các phần và có thể dùng trong trường hợp này. Ta sẽ cần nối những thành
        phần có liên hệ tới nhau lại, đồng thời viết tên mối liên hệ đó ở trên
        đoạn nối, đại khái sau khi xong trông sẽ kiểu như vậy:
      </P>
    </>,
    <>
      <Image src="https://lh3.googleusercontent.com/pw/AM-JKLWpcLFX2gQokoFliVqtnTZdprPxNt6QE20P2a0rTC7k4iDdpKPMuMhJh10NUEAJq_yZwoZXczl_wW0SpqdWTkuf542w3IvkdpR5CZCbZ0pKtWOWLK-pP-b4DUeSBcAL2aPIxUJVdsdrktLkH6SyE-v5XA=w1170-h659-no?authuser=0" />
    </>,
    <>
      <P>
        <b>nlm: Nhìn như kiểu gia phả phiên bản loằng ngoằng hơn nhỉ:v</b>
      </P>
      <P>
        nklm: Gia phả cũng có thể coi là 1 Concept Map được á, có điều gia phả
        mặc định mối quan hệ giữa các phần tử đều là parent-child nên có thể
        lược phần chữ mô tả quan hệ đi
      </P>
    </>,
    <>
      <P>
        <b>
          nlm: Ông vừa nói là cái dạng nối nối này không phải là cách duy nhất,
          thế còn các cách nào nữa?
        </b>
      </P>
      <P>
        nklm: Thực ra không hề có quy định nào cho việc Concept Map là phải biểu
        diễn như thế nào, hoàn toàn có thẻ tự sáng tạo cách thể hiện, miễn trên
        đó có tất cả các thành phần của một hệ thống/khái niệm và ta biểu diễn
        được mối liên hệ giữa các phần thì đều có thể gọi là Concept Map được,
        một ví dụ phổ biến là:
      </P>
    </>,
    <>
      <Image src="https://songhantourist.com/upload/articles-images/1629895140-ikigai-cong-cu-tim-kiem-y-nghia-cuoc-song-cua-nguoi-nhat.png" />
    </>,
    <>
      <P>
        <b>
          nlm: Nghe cũng có vẻ ổn, để tui thử xem thế nào, mà chưa quen lắm nên
          chắc tạm thời tui sẽ thử sử dụng kiểu nối nối trước thui vì nó dễ
          hiểu:v Xincamon
        </b>
      </P>
    </>,
  ],
});
