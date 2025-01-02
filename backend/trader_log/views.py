from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Trade
from .serializers import TradeSerializer


class TradeListCreateView(generics.ListCreateAPIView):
    serializer_class = TradeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Trade.objects.filter(user=self.request.user)


class TradeDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TradeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Trade.objects.filter(user=self.request.user)
