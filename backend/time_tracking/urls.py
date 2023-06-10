from app.views import PendingRecordsViewSet, TrackRecordsViewSet
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

defaultRouter = routers.DefaultRouter()
defaultRouter.register("trackRecords", TrackRecordsViewSet)
defaultRouter.register("pendingRecords", PendingRecordsViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(defaultRouter.urls)),
]
