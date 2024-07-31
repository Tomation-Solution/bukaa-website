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
  
//  ---------------------------------------- Event ------------------------
  export interface Event {
    id: string;
    name: string;
    image: string;
    amount: string;
    event_extra_details: string;
    is_paid_event: boolean;
    re_occuring: boolean;
    is_virtual: boolean;
    event_docs: string | null;
    is_for_excos: boolean;
    is_active: boolean;
    address: string;
    organiser_name: string;
    organiser_extra_info: string;
    organiserImage: string | null;
    is_special: boolean;
    startDate: string;
    startTime: string;
    scheduletype: string;
    schedule: string[];
    exco: string | null;
    commitee: string | null;
    chapters: string | null;
  }
  
  export interface ApiResponse {
    message: string;
    status_code: number;
    data: Event;
    success: boolean;
  }

  //------News------
  export interface NewsItems {
    id: string;
    name: string;
    image: string;
    body: string;
  }
  
  export interface NewsData {
    body: string;
    created_at: string;
    name: string;
    image: string;
  }
  
