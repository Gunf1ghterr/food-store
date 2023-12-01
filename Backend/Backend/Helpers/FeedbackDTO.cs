namespace Backend.Helpers
{
    public class FeedbackDTO
    {
        public int FeedbackId { get; set; }
        public string Message { get; set; }
        public string Image { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }

    }
}
