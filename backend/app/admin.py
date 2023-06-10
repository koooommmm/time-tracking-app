from django.contrib import admin

from .models import PendingRecords, TrackRecords

admin.site.register(TrackRecords)
admin.site.register(PendingRecords)
