export interface UseCaseData {
    id: number;
    Capability: number;
    "Business Function": string;
    "Business Capability": string;
    "Stakeholder or User": string;
    "AI Use Case": string;
    "AI Algorithms & Frameworks": string;
    Datasets: string;
    "Action / Implementation": string;
    "AI Tools & Models": string;
    "Digital Platforms and Tools": string;
    "Expected Outcomes and Results": string;
}

export interface IndustryData {
    Id: string;
    Industry: string;
    "Business Function": string;
    "Business Capability": string;
    "Stakeholders / Users": string;
    "AI Use Case": string;
    Description: string;
    "Implementation Plan": string;
    "Expected Outcomes": string;
    Datasets: string;
    "AI Tools / Platforms": string;
    "Digital Tools / Platforms": string;
    "AI Frameworks": string;
    "AI Tools and Models": string;
    "Industry References": string;
}

export interface ApiResponse<T> {
    total: number;
    page: number;
    page_size: number | string;
    data: T[];
}
