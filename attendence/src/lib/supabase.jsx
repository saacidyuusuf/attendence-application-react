import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_APP_URL;
console.log(supabaseKey, supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

//const supabase = createRouteHandlerClient();
//
export default supabase;
