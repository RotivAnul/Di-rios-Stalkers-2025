import React, { useState } from 'react';
import DiaryControls from './DiaryControls';
import DiaryBookCover from './DiaryBookCover';
import DiaryPage from './DiaryPage';
import PageSelector from './PageSelector';
import { Page, TextStyle } from '../types/diary';
import { defaultTextStyle } from '../constants/defaults';
import '../styles/animations.css';

export default function DiaryBook() {
  const [title, setTitle] = useState('Meu Diário');
  const [pages, setPages] = useState<Page[]>(
    Array.from({ length: 12 }, (_, i) => ({ 
      id: i + 1, 
      content: '',
      textStyle: defaultTextStyle
    }))
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [textColor, setTextColor] = useState('#000000');
  const [pageColor, setPageColor] = useState('rgba(247, 233, 215, 0.8)');
  const [labelColor, setLabelColor] = useState('#666666');
  const [fontFamily, setFontFamily] = useState('cursive');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageSelect = (pageIndex: number) => {
    if (pageIndex === currentPage) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setIsAnimating(false);
    }, 500);
  };

  const updatePageContent = (content: string) => {
    const updatedPages = [...pages];
    updatedPages[currentPage].content = content;
    setPages(updatedPages);
  };

  const updateTextStyle = (style: Partial<TextStyle>) => {
    const updatedPages = [...pages];
    updatedPages[currentPage].textStyle = {
      ...updatedPages[currentPage].textStyle,
      ...style
    };
    setPages(updatedPages);
  };

  return (
    <div className="flex h-screen" style={{
      background: `url('https://www.transparenttextures.com/patterns/clean-gray-paper.png'), linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`,
      backgroundBlendMode: 'overlay'
    }}>
      <div className="w-full max-w-5xl mx-auto p-4 flex flex-col">
        <DiaryControls
          textColor={textColor}
          pageColor={pageColor}
          labelColor={labelColor}
          fontFamily={fontFamily}
          textStyle={pages[currentPage].textStyle}
          onTextColorChange={setTextColor}
          onPageColorChange={setPageColor}
          onLabelColorChange={setLabelColor}
          onFontFamilyChange={setFontFamily}
          onTextStyleChange={updateTextStyle}
          onCoverImageChange={setCoverImage}
        />

        <div className="flex flex-1 pl-8">
          <DiaryBookCover 
            title={title} 
            onTitleChange={setTitle}
            fontFamily={fontFamily}
            coverImage={coverImage}
          />

          <DiaryPage
            content={pages[currentPage].content}
            onContentChange={updatePageContent}
            textColor={textColor}
            pageColor={pageColor}
            fontFamily={fontFamily}
            textStyle={pages[currentPage].textStyle}
            isAnimating={isAnimating}
          />
        </div>

        <PageSelector
          currentPage={currentPage}
          onPageSelect={handlePageSelect}
        />
      </div>
    </div>
  );
}