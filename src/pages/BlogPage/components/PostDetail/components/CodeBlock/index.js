import './styles.scss'
import { CodeBlock as DefaultCodeBlock  } from "react-code-blocks";

export const CodeBlock = ({text, language = 'js', showLineNumbers = false}) => {
return (<div className='code-block'>
    <DefaultCodeBlock {...{text, language, showLineNumbers}} theme={{backgroundColor: '#f0f0f0'}}/>
</div>)
};