import { createClient } from '@/lib/supabase/client'

export interface UploadResult {
  data: { path: string } | null
  error: any
}

export interface FileUploadOptions {
  bucket: string
  path: string
  file: File
  options?: {
    cacheControl?: string
    upsert?: boolean
  }
}

export async function uploadFile({
  bucket,
  path,
  file,
  options = {}
}: FileUploadOptions): Promise<UploadResult> {
  const supabase = createClient()
  
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: options.cacheControl || '3600',
      upsert: options.upsert || false,
    })

  return { data, error }
}

export async function getPublicUrl(bucket: string, path: string): Promise<string> {
  const supabase = createClient()
  
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return data.publicUrl
}

export async function deleteFile(bucket: string, path: string): Promise<{ error: any }> {
  const supabase = createClient()
  
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path])

  return { error }
}

export async function listFiles(bucket: string, path?: string): Promise<{ data: any[] | null; error: any }> {
  const supabase = createClient()
  
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(path)

  return { data, error }
}

// Helper function to generate unique file names
export function generateFileName(originalName: string, userId?: string): string {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  const extension = originalName.split('.').pop()
  const baseName = originalName.split('.').slice(0, -1).join('.')
  
  if (userId) {
    return `${userId}/${timestamp}-${randomString}-${baseName}.${extension}`
  }
  
  return `${timestamp}-${randomString}-${baseName}.${extension}`
}
