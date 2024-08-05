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

export interface GalleryFolder {
  id: number;
  images: GalleryImage[];
  name: string;
  date_taken: string;
  chapters: null | string;
}

export interface PaginationLink {
  url: string | null;
  label: number;
  active: boolean;
}

export interface GalleryData {
  links: PaginationLink[];
  current_page: number;
  data: GalleryFolder[];
  last_page_url: string;
  first_page_url: string;
  pages_number: number;
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
  
//---------------Event Registeration
export type ApiError = {
  message?: string;
  data?: {
    email?: string[];
  };
};

export interface Event {
  id: string;
  image: string;
  name: string;
  is_paid_event: boolean;
  re_occuring: boolean;
  is_virtual: boolean;
  is_for_excos: boolean;
  commitee_id: number | null;
  exco_id: number | null;
  amount: string;
  is_active: boolean;
  startDate: string;
  startTime: string;
  scheduletype: string;
  schedule: string[];
  event_access: {
    link: string;
    has_paid: boolean;
  };
  public: string; // Add this line
  organiser_extra_info: string;
  organiser_name: string;
  event_extra_details: string;
  event_docs: string | null;
  organiserImage: string | null;
  is_special: boolean;
}


export interface ApiResponse {
  data: Event;
}
