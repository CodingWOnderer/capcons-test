export interface LoginDTO{
    credential:string,
    password:string
    country_code:string
    circle_id:string
    remember_me:"yes" | "no"
}

export interface LoginResponseDTO {
  data: {
    access_token: string
    is_verified: boolean
    refresh_token: string
    request_id: string
    role: string
    two_fa_required: boolean
    user_id: string
  }
  message: string
}
