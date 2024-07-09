import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xcyarjfajdkwvmugznnv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjeWFyamZhamRrd3ZtdWd6bm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3NzA2MzMsImV4cCI6MjAzNTM0NjYzM30.oNYfvBBdrHjVsbfcxTtWSBPtX1S5xFkLZBSbM189W1k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
