import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mwlixkfsdpxyjbbbercn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13bGl4a2ZzZHB4eWpiYmJlcmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MjI0MDksImV4cCI6MjA5MDk5ODQwOX0.APSl027-5d5pfpZvuFcdnNPvtBFeQV1_gQ5r4B_Pjf8';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase.auth.signUp({
    email: 'regular_admin@scholar.edu.ng',
    password: 'password123',
    options: {
      data: {
        full_name: 'Regular Admin'
      }
    }
  });

  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('User created:', data.user.id);
  }
}

main();
