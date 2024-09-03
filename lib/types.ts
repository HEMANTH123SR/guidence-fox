export interface Institution {
  institution_id: string;
  name: string;
  location: string;
  affiliation: string;
  type: string;
  ranking: number;
  description: string;
  facilities: {
    library: boolean;
    hostel: boolean;
    sports: boolean;
    wifi: boolean;
  };
  website: string;
  specialization: string | false;
  reviews: {
    rating: number;
    review_count: number;
  };
  courses: Course[];
  universityImages: string[];
}

interface Course {
  name: string;
  duration: string;
  level: string;
  stream: string;
  fees: number;
  eligibility: string;
  description: string;
}
