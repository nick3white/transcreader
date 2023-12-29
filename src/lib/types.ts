

// CORTEX TYPES

export interface APIRequestInfo {
  ProviderVersion: string;
  ProviderIdentity: string;
  ProviderID: string;
  Module: string;
  APIVersion: string;
  Resource: string;
  IsLoggedIn: boolean;
  Parameters: {
    Package: string;
    PackageFields: string;
    RepresentativeFields: string;
    ContentFields: string;
    token: string;
  };
  Status: string;
  UserLogin: string;
  Session: string;
  TimeoutPeriodMinutes: number;
}
export interface Representative {
  SystemIdentifier: string;
  MediaEncryptedIdentifier: string;
  Title: string;
  MaxWidth: string;
  MaxHeight: string;
}
export interface Item {
  SystemIdentifier: string;
  MediaEncryptedIdentifier: string;
  Title: string;
  "CoreField.IIIFResourceType": string;
}
export interface ItemRepresentative {
  MediaEncryptedIdentifier: string;
  MaxHeight: string | number;
  MaxWidth: string | number;
}
export interface ItemPage {
  MediaEncryptedIdentifier: string;
  MaxHeight: string | number;
  MaxWidth: string | number;
  "CoreField.IIIFResourceType": string;
  "new.User-Generated-Transcription": string;
}
export interface ItemAPIData {
  Title: string;
  Representative: ItemRepresentative;
  Content: ItemPage[];
}
export interface CortexItemData {
  APIRequestInfo: APIRequestInfo;
  APIResponse: ItemAPIData;
}

