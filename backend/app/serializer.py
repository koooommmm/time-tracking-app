from rest_framework import serializers

from .models import PendingRecords, TrackRecords


class TrackRecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrackRecords
        fields = "__all__"


class PendingRecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PendingRecords
        fields = "__all__"
