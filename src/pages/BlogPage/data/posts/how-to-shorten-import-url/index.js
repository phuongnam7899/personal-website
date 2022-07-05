import {
  HighlightedText,
  P,
  CodeBlock,
} from "../../../components/PostDetail/components";
import { Link } from "react-router-dom";
export default {
  intro: 'Giảm tối thiểu lượng "../../../" xuất hiện trong code của dự án',
  tags: ["#coding", "#react"],
  title: {
    en: "How to shorten import url in React projects",
    vi: "Rút gọn link khi import trong dự án ReactJS",
  },
  previewImg:
    "https://lh3.googleusercontent.com/pw/AM-JKLXXT_1lNMBwcte7-S0OxDt3fdF1cRjXayOsn2QcXerfFtuCbo0PaMazgjNS1Z9CLmDmdN8WpL81aP6AKdB2J0Im7RxLesQSlhM6xo0205-uyH_uw1PaxBRVCcSR53GWPY-wXHgzO05bqWeMqMa-snMWzA=w803-h150-no?authuser=0",
  slug: "how-to-shorten-import-url",
  pageEn: [],
  pagesVi: [
    <>
      <P>
        <b>
          nlm: Ê hôm trước bảo nói về cách rút gọn link khi import mà mãi chưa
          nói vậy.-. Giờ tui thường xuyên phải import theo kiểu{" "}
          <HighlightedText>
            ../../../../components/Button/Button.js
          </HighlightedText>
          , khổ thực sự
        </b>
      </P>
      <P>
        nklm: Oke, để giải quyết cái đống bùi nhùi kia thì có 2 cái cần nói,
        muốn nghe cái ngắn hay cái dài trước?
      </P>
    </>,
    <>
      <P>
        <b>nlm: Cái nào dễ làm trước đê</b>
      </P>
      <P>
        nklm: Đầu tiên là cần xử lý cái đoạn{" "}
        <HighlightedText>Button/Button.js</HighlightedText>, thay vì để tên file
        là <HighlightedText>Button.js</HighlightedText> thì nên để là{" "}
        <HighlightedText>index.js</HighlightedText>, à mà cái này tui nhớ đã nói
        trong lần nói về{" "}
        <Link to={"/blog/react-folder-structure-for-small-medium-projects"}>
          folder structure
        </Link>{" "}
        rồi mà nhỉ, có gì xem lại cho rõ nhé
      </P>
    </>,
    <>
      <P>
        <b>
          nlm: ... À ờ nhỉ, nhờ rùi, ok thế cái đống{" "}
          <HighlightedText>../../../../</HighlightedText>
        </b>{" "}
        giờ àm sao, nó mới là cái dài nhất á
      </P>
      <P>
        nklm: Để giải quyết cái đó thì cần config thêm webpack alias, nên ô cần
        cài craco bằng lệnh{" "}
        <HighlightedText>npm install @craco/craco</HighlightedText> trước nhé
      </P>
    </>,
    <>
      <P>
        <b>nlm: craco là gì thế?</b>
      </P>
      <P>
        nklm: Nó là 1 package thôi, craco là viết tắt của{" "}
        <HighlightedText>
          Create React App Configuration Override
        </HighlightedText>
        , đọc tên là hiểu rồi đấy
      </P>
    </>,
    <>
      <P>
        <b>
          nlm: Hmm, là để override config huh? Ok, thế cài xong rồi làm gì nữa?
        </b>
      </P>
      <P>
        <P>
          nklm: Cài xong rồi thì tạo thêm 1 file{" "}
          <HighlightedText>craco.config.js</HighlightedText> với nội dung thế
          này:
        </P>
        <CodeBlock
          text={`const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/')
    }
  }
};`}
        />
      </P>
    </>,
    <>
      <P>
        <P>
          nklm: Sau đó ô cần quay qua file{" "}
          <HighlightedText>packages.json</HighlightedText> update lại 3 scripts
          như thế này:
        </P>
        <CodeBlock
          text={`{
  "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
  },
}`}
          language="json"
          showLineNumbers={false}
        />
      </P>
    </>,
    <>
      <P>
        <b>nlm: Thế là được luôn huh?</b>
      </P>
      <P>
        <P>
          nklm: Uhm, giờ khi cần import cái Button như ở ô bảo vừa nãy chỉ cần
          import như này
        </P>
        <CodeBlock
          text='import { Button } from "@components/Button"'
          showLineNumbers={false}
          language="js"
        />
        <P>
          nklm: Hay muốn gọn hơn nữa thì trong folder{" "}
          <HighlightedText>components</HighlightedText> ô tạo thêm 1 file{" "}
          <HighlightedText>index.js</HighlightedText>, sau đó import tất cả các
          thằng con vào như thế này:
        </P>
        <CodeBlock
          text={`import * from "./Button"
import * from "./Form"
import * from "./Table"`}
        />
        <P>nklm: Thì đến lúc import chỉ cần thế này là được:</P>
        <CodeBlock text={'import { Button, Form, Table } from "@components"'} />
      </P>
    </>,
    <>
      <P>
        nklm: Về cơ bản như vậy là code chạy sẽ không lỗi rồi, nhưng mà mà để
        IDE là VSCode có thể hiện và đưa ra suggestion đúng thì ô cần config
        thêm bằng cách tạo file <HighlightedText>jsconfig.json</HighlightedText>{" "}
        thế này:
      </P>
      <P>
        <CodeBlock
          language="json"
          text={`{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@components": ["src/components"],
      }
    }
  }`}
        />
      </P>
    </>,
    <>
      <P>
        <b>
          nlm: Uh huh, nhìn ổn hơn rồi đấy, như này nếu muốn rút gọn link import
          đến các phần khác như <HighlightedText>helper</HighlightedText>,{" "}
          <HighlightedText>hooks</HighlightedText> thì cũng tương tự nhỉ?
        </b>
      </P>
      <P>nklm: Uhm, tui đang định nói thêm phần đó:v</P>
      <P>
        <b>nlm: Okok, xincamon</b>
      </P>
    </>,
  ],
};
