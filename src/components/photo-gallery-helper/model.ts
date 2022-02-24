export interface IGalleryTag {
  value: string;
  title: string;
}

export interface IGalleryContent {
  src: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  caption?: string;
  tags?: IGalleryTag[];
}
