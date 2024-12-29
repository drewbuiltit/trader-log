from django.urls import path
from django.contrib import admin
from trader_log.views import TradeListCreateView, TradeDetailView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("trades/", TradeListCreateView.as_view(), name="trade-list-create"),
    path("trades/<int:pk>/", TradeDetailView.as_view(), name="trade-detail"),
]
