//  ---------------------------------------- Publication -----------------------
export interface Publication {
    id: string;
    image: string;
    name: string;
    created_at: string;
  }

  //  ---------------------------------------- Publication Details -----------------------
  export interface Paragraph {
    id: number;
    paragraph: string | null;
    heading: string | null;
  }
  
  export interface PublicationData {
    id: number;
    paragraphs: Paragraph[];
    name: string;
    is_exco: boolean;
    is_committe: boolean;
    is_member: boolean;
    created_at: string;
    updated_at: string;
    likes: number | null;
    dislikes: number | null;
    body: string;
    image: string;
    danload: string | null;
    exco: string | null;
    commitee_name: string | null;
    chapters: string | null;
    membership_grade: string | null;
  }
  

  //  ---------------------------------------- Gallery -------------------------
  export interface GalleryImage {
    id: number;
    image: string;
  }
  
  export interface GalleryFolder {
    id: number;
    name: string;
    date_taken: string;
    images: GalleryImage[];
  }
  
//  ---------------------------------------- Gallery Details -------------------------
  export interface GalleryImage {
    // id: string;
    image: string;
  }
  
  export interface GalleryData {
    name: string;
    date_taken: string;
    images: GalleryImage[];
  }
  
