export interface DiaryEntry {
  id: string;
  date: Date;
  content: string;
  lastModified?: Date;
}

export interface CoverStyle {
  id: string;
  title: string;
  texture: string;
  color: string;
  preview?: string;
}

export interface DiaryState {
  isOpen: boolean;
  entries: DiaryEntry[];
  currentPage: number;
  coverStyle: CoverStyle;
}