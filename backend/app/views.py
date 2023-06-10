from rest_framework import viewsets

from .models import PendingRecords, TrackRecords
from .serializer import PendingRecordsSerializer, TrackRecordsSerializer


class TrackRecordsViewSet(viewsets.ModelViewSet):
    queryset = TrackRecords.objects.all()
    serializer_class = TrackRecordsSerializer


class PendingRecordsViewSet(viewsets.ModelViewSet):
    queryset = PendingRecords.objects.all()
    serializer_class = PendingRecordsSerializer
