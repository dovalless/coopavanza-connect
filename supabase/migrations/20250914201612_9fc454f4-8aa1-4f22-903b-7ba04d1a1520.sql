-- Add SELECT policy for contact_messages table to allow only authenticated users (staff) to view messages
CREATE POLICY "Only authenticated users can view contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (auth.role() = 'authenticated');