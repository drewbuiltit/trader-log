from django.db import models
from django.contrib.auth.models import User


class Trade(models.Model):
    class Meta:
        app_label = "trader_log"

    TRADE_TYPE_CHOICES = [
        ("BUY", "Buy"),
        ("SELL", "Sell"),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="trades")
    symbol = models.CharField(max_length=10)
    trade_date = models.DateField()
    trade_type = models.CharField(max_length=4, choices=TRADE_TYPE_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    comments = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username}: {self.trade_type} {self.symbol} on {self.trade_date}"
