import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eynyomfxclwozhrsajwy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5bnlvbWZ4Y2x3b3pocnNhand5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDM0ODQsImV4cCI6MjA0NzY3OTQ4NH0.wPsLXpL68nVvYcmfv6uZD5sIoON7hUPhyE7zlhFQpCc";

export const supabase = createClient(supabaseUrl, supabaseKey);
