import ReactQuill from "react-quill";

export default function Editor({value,onChange}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      // [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'size',
    'video',
    'align',
    'background',
    'direction',
    'code-block',
    'code',
    ];

  return (
    <div className="content">
    <ReactQuill
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules} 
      formats={formats}  />
      
    </div>
  );
}
