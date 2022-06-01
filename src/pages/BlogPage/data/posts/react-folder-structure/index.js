import {
  HighlightedText,
  P,
  SectionTitle,
  TextCode,
} from "../../../components/PostDetail/components";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IconWithTooltip } from "../../../../../components";

export default {
  intro: {en: "Pages, components, helper, etc...", vi: "Pages, components, helper, v.v..."},
  tags: ["#coding", "#reactjs"],
  title: {en: "Folder structure for small medium/small ReactJS projects", vi: "Cấu trúc thư mục cho các dự án ReactJS nhỏ và vừa nhỏ"},
  slug: "react-folder-structure-for-small-medium-projects",
  pagesEng: [],
  pagesVi: [
    <>
      <P>
        <b>
          Ê tui đang học React trên mạng, mà thấy các tutorial có mấy cái
          structure code khác nhau lắm, nên theo cái nào thì tốt đc nhỉ? 🤔
        </b>
      </P>
      <P>
        Uhm, bố React bố cho flexible lắm, thích để kiểu nào cũng được hết á,
        không khắt khe như bố Angular
      </P>
    </>,
    <>
      <P>
        <b>Trả lời đúng câu hỏi đi má 😑</b>
      </P>
      <P>
        Cái đó còn tùi xem ông đang code trong dự án nào nữa, to hay vừa và nhỏ,
        tùy vào nhu cầu dự án khác nhau mà structure có thể khác nhau một chút
      </P>
    </>,
    <>
      <P>
        <b>
          Hmm... 🤔 tui đang muốn làm 1 cái website cũng không lớn lắm, hiện tại
          có 1 vài tính năng thui
        </b>
        <br />
        <b>
          Cơ mà tui cũng dự đỉnh kiểu sau này thêm các tính năng mới nữa, sợ lúc
          đó không biết thêm vào đâu, hay bug xong nhìn code tùm lum 😵‍💫 khỏi fix
          á
        </b>
      </P>
      <P>
        Oki chờ chút... Xem thử structure trong{" "}
        <a
          target="__blank"
          href="https://github.com/phuongnam7899/personal-website"
        >
          repo này
        </a>{" "}
        xem, fork thẳng về để dùng cho lần sau cũng được
      </P>
    </>,
    <>
      <P>
        <b>
          🤨... Nhìn qua thì tui cũng tự hình dung được vài phần, mà vẫn có mấy
          cái cần hỏi lại, đầu tiên là ngay ngoài có 2 file tui chưa thấy bao
          giờ là <HighlightedText>craco.config</HighlightedText> và{" "}
          <HighlightedText>path.json</HighlightedText>, nó để làm gì thế
        </b>
      </P>
      <P>
        2 file trên dùng để rút gọn link import, chưa liên quan gì lắm đến
        structure lắm đâu, tui sẽ nói hôm khác nhé
      </P>
    </>,
    <>
      <P>
        <b>
          Ò, thế trong <HighlightedText>/src</HighlightedText> chắc folder{" "}
          <HighlightedText>components</HighlightedText> để lưu mấy cái
          components mình sẽ dùng đi dùng lại nhỉ? 🧐
        </b>
      </P>
      <P>
        <P>
          Đúng rồi, chỗ này có 1 lưu ý là mỗi component nên được gói gọn trong 1
          component duy nhất, ví dụ khi muốn tạo 1 component "Text" đơn giản thì
          folder sẽ như thế này:
        </P>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<i class="fas fa-angle-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <b>
              Text{" "}
              <IconWithTooltip
                icon="question"
                tooltipContent="Tên component nhớ viết hoa nhé"
              />
            </b>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              index.js{" "}
              <IconWithTooltip
                icon="question"
                tooltipContent="JSX và các logic của component ở đây"
              />
            </div>
            <div>
              styles.scss{" "}
              <IconWithTooltip
                icon="question"
                tooltipContent="Style component vào đây, nếu đang dùng CSS hay cái khác thì cũng tương tự"
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </P>
    </>,
    <>
      <P>
        <b>
          Tại sao lại để tên file kia là{" "}
          <HighlightedText>index.js</HighlightedText> mà không phải{" "}
          <HighlightedText>Text.js</HighlightedText>?
        </b>
      </P>
      <P>
        Bình thường nếu để là <HighlightedText>Text.js</HighlightedText> thì nếu
        muốn import component đó vào chỗ khác, ví dụ như vào file cùng bậc với
        folder Text thì sẽ có dạng là:
        <TextCode>
          <div>import {`{ Text }`} from "./Text/Text"</div>
        </TextCode>
      </P>
      <P>
        Nếu để <HighlightedText>index.js</HighlightedText> thì hệ thống sẽ tự
        động lấy file index.js của folder chỉ cần:
        <TextCode>
          <div>import {`{ Text }`} from "./Text"</div>
        </TextCode>
      </P>
    </>,
    <>
      <P>
        <b>
          Okie, với cả nhìn "Text/Text" cũng hơi kỳ 😁. Rồi, vậy là xong cái{" "}
          <HighlightedText>/components</HighlightedText>, thế còn những cái khác
          thì sao?
        </b>
      </P>
      <P>
        <P>
          <HighlightedText>/helpers</HighlightedText> là chỗ để ném mấy cái hàm
          được sử dụng nhiều trong app của mình vào, cố gắng mỗi hàm 1 file,
          những hàm cùng nhóm thì có thể cho vào folder riêng:
        </P>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<i class="fas fa-angle-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <b>helpers</b>
          </AccordionSummary>
          <AccordionDetails>
            <P>
              <Accordion>
                <AccordionSummary
                  expandIcon={<i class="fas fa-angle-down"></i>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>objects</b>
                </AccordionSummary>
                <AccordionDetails>
                  <P>handleSomeThingOfObject.js</P>
                  <P>handleSomeThingElseOfObject.js</P>
                </AccordionDetails>
              </Accordion>
            </P>
            <P>calculateSomething.js</P>
            <P>calculateSomethingElse.js</P>
          </AccordionDetails>
        </Accordion>
      </P>
    </>,
    <>
      <P>
        <P>
          <HighlightedText>/pages</HighlightedText> thì chỉ dùng để lưu các page
          có trong app (thường mỗi page sẽ có 1 route riêng):
        </P>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<i class="fas fa-angle-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <b>pages</b>
          </AccordionSummary>
          <AccordionDetails>
            <P>
              <Accordion>
                <AccordionSummary
                  expandIcon={<i class="fas fa-angle-down"></i>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>HomePage</b>
                </AccordionSummary>
                <AccordionDetails>
                  <P>index.js</P>
                  <P>styles.scss</P>
                </AccordionDetails>
              </Accordion>
            </P>
            <P>
              <Accordion>
                <AccordionSummary
                  expandIcon={<i class="fas fa-angle-down"></i>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>Products Page</b>
                </AccordionSummary>
                <AccordionDetails>
                  <P>index.js</P>
                  <P>styles.scss</P>
                </AccordionDetails>
              </Accordion>
            </P>
          </AccordionDetails>
        </Accordion>
      </P>
    </>,
    <>
      <P>
        <P>
          Nếu ô có các custom hook thì có thể cho vào{" "}
          <HighlightedText>/hooks</HighlightedText>:
        </P>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<i class="fas fa-angle-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <b>hooks</b>
          </AccordionSummary>
          <AccordionDetails>
            <P>aHooks.js</P>
            <P>anotherHooks.js</P>
          </AccordionDetails>
        </Accordion>
      </P>
    </>,
    <>
      <P>
        <P>
          <HighlightedText>/styles</HighlightedText> thì dùng để chứa những cái
          style chung (các biến, class,...):
        </P>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<i class="fas fa-angle-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <b>styles</b>
          </AccordionSummary>
          <AccordionDetails>
            <P>
              animation.scss{" "}
              <IconWithTooltip
                icon="question"
                tooltipContent="Put animation effect (keyframes) here"
              />
            </P>
            <P>
              common.scss{" "}
              <IconWithTooltip
                icon="question"
                tooltipContent='Put classes that here, and also use "@import" to import all other file in this folder'
              />
            </P>
            <P>
              mixin.scss{" "}
              <IconWithTooltip
                icon="question"
                tooltipContent="Put mixins (if have) here"
              />
            </P>
            <P>
              variables.scss{" "}
              <IconWithTooltip
                icon="question"
                tooltipContent="Put variables (colors, space,...) here"
              />
            </P>
          </AccordionDetails>
        </Accordion>
      </P>
    </>,
    <>
      <P>
        <P>
          Nếu app của ông có kết nối với server backend nào đó (thường là có),
          để hết các request đến các api vào{" "}
          <HighlightedText>/apis</HighlightedText>:
        </P>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<i class="fas fa-angle-down"></i>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <b>apis</b>
          </AccordionSummary>
          <AccordionDetails>
            <P>authApis.js</P>
            <P>productsApis.js</P>
            <P>userApis.js</P>
          </AccordionDetails>
        </Accordion>
      </P>
    </>,
    <>
      <b>Okie, chưa quen lắm nhưng tạm thời cứ thế đã, để thử áp dụng vào project sắp tới xem ổn không, xincamon 😘</b>
    </>
  ],
};
