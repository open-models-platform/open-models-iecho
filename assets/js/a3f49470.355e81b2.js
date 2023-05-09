"use strict";(self.webpackChunkopen_models_iecho=self.webpackChunkopen_models_iecho||[]).push([[4168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,m=d["".concat(l,".").concat(c)]||d[c]||g[c]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},95117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},i="Datasets",s={unversionedId:"data/datasets",id:"data/datasets",title:"Datasets",description:"Overview",source:"@site/docs/data/datasets.md",sourceDirName:"data",slug:"/data/datasets",permalink:"/open-models-iecho/docs/data/datasets",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Data Schemas",permalink:"/open-models-iecho/docs/data/schemas"},next:{title:"Data Augmentation",permalink:"/open-models-iecho/docs/data/augmentation"}},l={},u=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Current Progress</strong>",id:"current-progress",level:3},{value:"<strong>Repository Structure</strong>",id:"repository-structure",level:3},{value:"<strong>Dataset Formats</strong>",id:"dataset-formats",level:2},{value:"<strong>Instruction format</strong>",id:"instruction-format",level:3},{value:"<strong>Text-only format</strong>",id:"text-only-format",level:3},{value:"<strong>Dataset Requirements</strong>",id:"dataset-requirements",level:2},{value:"<strong>How to Contribute</strong>",id:"how-to-contribute",level:2},{value:"<strong>Creating a Dataset on Hugging Face</strong>",id:"creating-a-dataset-on-hugging-face",level:3},{value:"1. Convert your dataset file(s) to the Parquet format using pandas and pyarrow libraries",id:"1-convert-your-dataset-files-to-the-parquet-format-using-pandas-and-pyarrow-libraries",level:4},{value:"2. Install Hugging Face Hub",id:"2-install-hugging-face-hub",level:4},{value:"3. Log in to Hugging Face",id:"3-log-in-to-hugging-face",level:4},{value:"4. Push the Parquet file to Hugging Face using the following code",id:"4-push-the-parquet-file-to-hugging-face-using-the-following-code",level:4},{value:"5. Update the Hugging Face <code>README.md</code> file",id:"5-update-the-hugging-face-readmemd-file",level:4},{value:"<strong>Making a Pull Request</strong>",id:"making-a-pull-request",level:3},{value:"1. Fork this repository",id:"1-fork-this-repository",level:4},{value:"2. Create a new branch in your fork",id:"2-create-a-new-branch-in-your-fork",level:4},{value:"3. Add your dataset to the repository",id:"3-add-your-dataset-to-the-repository",level:4},{value:"4. Stage your changes and run the pre-commit hook",id:"4-stage-your-changes-and-run-the-pre-commit-hook",level:4},{value:"5. Submit a pull request",id:"5-submit-a-pull-request",level:4}],p={toc:u},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasets"},"Datasets"),(0,r.kt)("h2",{id:"overview"},(0,r.kt)("strong",{parentName:"h2"},"Overview")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-models-platform/open-models-iecho/"},"open-models-platform/open-models-iecho"),"\ngithub repository aims to provide a diverse and accessible collection of\ndatasets that can be used to train OpenAssistant models.",(0,r.kt)("br",null)," Our goal is to\ncover a wide range of topics, languages and tasks."),(0,r.kt)("p",null,"To simplify the training process, all data must be ",(0,r.kt)("inlineCode",{parentName:"p"},"UTF-8")," encoded."),(0,r.kt)("h3",{id:"current-progress"},(0,r.kt)("strong",{parentName:"h3"},"Current Progress")),(0,r.kt)("p",null,"To see the datasets people are currently working on, please refer to\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.google.com/spreadsheets/d/1NYYa6vHiRnk5kwnyYaCT0cBO62--Tm3w4ihdBtp4ISk"},"the spreadsheet")),"."),(0,r.kt)("h3",{id:"repository-structure"},(0,r.kt)("strong",{parentName:"h3"},"Repository Structure")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each dataset is organized into its own folder, which may include notebooks,\nprocessing scripts, markdown files and other materials that explain the\ndataset creation process"),(0,r.kt)("li",{parentName:"ul"},"The dataset files themselves are stored on Hugging Face"),(0,r.kt)("li",{parentName:"ul"},"The root ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__.py")," lists the dataset names and corresponding Hugging Face\ndatasets"),(0,r.kt)("li",{parentName:"ul"},"The final version of each dataset is pushed to the\n",(0,r.kt)("a",{parentName:"li",href:"https://huggingface.co/OpenAssistant"},"OpenAssisstant Hugging Face"))),(0,r.kt)("h2",{id:"dataset-formats"},(0,r.kt)("strong",{parentName:"h2"},"Dataset Formats")),(0,r.kt)("p",null,"To simplify the training process, all datasets must be stored as Parquet files\nwith the option ",(0,r.kt)("inlineCode",{parentName:"p"},"row_group_size=100")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"index=False"),".",(0,r.kt)("br",null)," There are two types\nof datasets accepted: instruction and text-only."),(0,r.kt)("h3",{id:"instruction-format"},(0,r.kt)("strong",{parentName:"h3"},"Instruction format")),(0,r.kt)("p",null,"Instruction datasets are designed to align language models with human\ninteractions. These can take the form of question-answer, request-response,\ntask-solution pairs, and so on. The instruction dataset must include the\nfollowing columns:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"INSTRUCTION")," (string): Instruction text"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"RESPONSE")," (string): Expected response to the instruction"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"SOURCE"),' (string): Original data source short name, e.g. "wikipedia"'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"METADATA")," (JSON string, optional): Any other useful information stored in\nJSON",(0,r.kt)("br",null)," For example, NSFW content can be marked as ",(0,r.kt)("inlineCode",{parentName:"li"},'{"nsfw": true}'))),(0,r.kt)("h3",{id:"text-only-format"},(0,r.kt)("strong",{parentName:"h3"},"Text-only format")),(0,r.kt)("p",null,"For datasets that do not fit into the instruction format, text-only format is\nproposed. The text-only dataset must include the following columns:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TEXT")," (string)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"SOURCE")," (string)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"METADATA")," (JSON string, optional)")),(0,r.kt)("h2",{id:"dataset-requirements"},(0,r.kt)("strong",{parentName:"h2"},"Dataset Requirements")),(0,r.kt)("p",null,"The dataset must adhere to the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must have a permissive license"),(0,r.kt)("li",{parentName:"ul"},"Must not contain child sexual abuse materials"),(0,r.kt)("li",{parentName:"ul"},"Must not contain materials with private individual's personal information\n(e.g. name, address, phone number, government ID, or medical information)")),(0,r.kt)("h2",{id:"how-to-contribute"},(0,r.kt)("strong",{parentName:"h2"},"How to Contribute")),(0,r.kt)("p",null,"To add a new dataset to OpenAssistant, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create an issue"),": Create a new\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-models-platform/open-models-iecho/issues/new"},"issue")," and describe\nyour proposal for the new dataset.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a dataset on Hugging Face"),": Create a dataset on\n",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co"},"HuggingFace"),". See\n",(0,r.kt)("a",{parentName:"p",href:"#creating-a-dataset-on-huggingface"},"below")," for more details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Make a pull request"),": Add a new dataset loading script to this folder and\nlink the issue in the pull request description. For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"#making-a-pull-request"},"below"),"."))),(0,r.kt)("h3",{id:"creating-a-dataset-on-hugging-face"},(0,r.kt)("strong",{parentName:"h3"},"Creating a Dataset on Hugging Face")),(0,r.kt)("p",null,"To create a new dataset on Hugging Face, follow these steps:"),(0,r.kt)("h4",{id:"1-convert-your-dataset-files-to-the-parquet-format-using-pandas-and-pyarrow-libraries"},"1. Convert your dataset file(s) to the Parquet format using ",(0,r.kt)("a",{parentName:"h4",href:"https://pandas.pydata.org/"},"pandas")," and ",(0,r.kt)("a",{parentName:"h4",href:"https://pypi.org/project/pyarrow/"},"pyarrow")," libraries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\n# Create a pandas dataframe from your dataset file(s)\ndf = pd.read_json(...) # or any other way\n\n# Save the file in the Parquet format\ndf.to_parquet("dataset.parquet", row_group_size=100, engine="pyarrow", index=False)\n')),(0,r.kt)("p",null,"Make sure the text data in the dataframe is properly encoded as ",(0,r.kt)("inlineCode",{parentName:"p"},"UTF-8"),"!"),(0,r.kt)("h4",{id:"2-install-hugging-face-hub"},"2. Install Hugging Face Hub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install huggingface_hub\npip install 'huggingface_hub[cli]'\n")),(0,r.kt)("h4",{id:"3-log-in-to-hugging-face"},"3. Log in to Hugging Face"),(0,r.kt)("p",null,"Use your ",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/hub/security-tokens"},"access token")," to\nlogin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Via terminal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"huggingface-cli login\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in Jupyter notebook (currently does not work in\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/huggingface/huggingface_hub/issues/752"},"Visual Studio Code"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from huggingface_hub import notebook_login\nnotebook_login()\n")),(0,r.kt)("h4",{id:"4-push-the-parquet-file-to-hugging-face-using-the-following-code"},"4. Push the Parquet file to Hugging Face using the following code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from datasets import Dataset\nds = Dataset.from_parquet("dataset.parquet")\nds.push_to_hub("your_huggingface_name/dataset_name")\n')),(0,r.kt)("h4",{id:"5-update-the-hugging-face-readmemd-file"},"5. Update the Hugging Face ",(0,r.kt)("inlineCode",{parentName:"h4"},"README.md")," file"),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," file of your dataset by visiting this link:\n",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/datasets/your_huggingface_name/dataset_name/edit/main/README.md"},"https://huggingface.co/datasets/your_huggingface_name/dataset_name/edit/main/README.md"),"\n(paste your HuggingFace name and dataset)"),(0,r.kt)("h3",{id:"making-a-pull-request"},(0,r.kt)("strong",{parentName:"h3"},"Making a Pull Request")),(0,r.kt)("h4",{id:"1-fork-this-repository"},"1. Fork this repository"),(0,r.kt)("h4",{id:"2-create-a-new-branch-in-your-fork"},"2. Create a new branch in your fork"),(0,r.kt)("h4",{id:"3-add-your-dataset-to-the-repository"},"3. Add your dataset to the repository"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a folder with the name of your dataset."),(0,r.kt)("li",{parentName:"ul"},"Add files that describe your dataset and its creation, such as a README,\nnotebooks, scrapers, etc."),(0,r.kt)("li",{parentName:"ul"},"Add your dataset to the parent ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__.py"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'INSTRUCTION_DATASETS = {\n  ...,\n  "dataset_name": "your_huggingface_name/dataset_name"\n}\n')),(0,r.kt)("h4",{id:"4-stage-your-changes-and-run-the-pre-commit-hook"},"4. Stage your changes and run the pre-commit hook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pre-commit run\n")),(0,r.kt)("h4",{id:"5-submit-a-pull-request"},"5. Submit a pull request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submit a pull request and include a link to the issue it resolves in the\ndescription, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"Resolves #123"))))}g.isMDXComponent=!0}}]);