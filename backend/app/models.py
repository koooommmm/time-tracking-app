from django.db import models

STATUS_CHOICES = (("進行中", "Doing"), ("中断", "Pending"), ("完了", "Done"))


class TrackRecords(models.Model):
    name = models.CharField(max_length=50)
    start_at = models.DateTimeField(auto_now_add=True)
    end_at = models.DateTimeField(blank=True, null=True)
    status = models.CharField(choices=STATUS_CHOICES, max_length=10)


class PendingRecords(models.Model):
    record_id = models.ForeignKey("TrackRecords", on_delete=models.CASCADE)
    start_at = models.DateTimeField(auto_now_add=True)
    end_at = models.DateTimeField(blank=True, null=True)
