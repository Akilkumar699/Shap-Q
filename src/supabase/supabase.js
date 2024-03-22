import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jwskwfchywvynmxakojk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3c2t3ZmNoeXd2eW5teGFrb2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzMjk1MjQsImV4cCI6MjAyNTkwNTUyNH0.e6L_iGMkgcZj4vrTxGhT9yO-_6rjjxoajq3JwpB0x4k'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase