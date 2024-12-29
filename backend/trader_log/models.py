from django.db import models


class Trade(models.Model):
    BUY_SELL_CHOICES = [
        ("BUY", "Buy"),
        ("SELL", "Sell"),
    ]
    symbol = models.CharField(max_length=10)
    trade_date = models.DateField()
    buy_sell = models.CharField(max_length=4, choices=BUY_SELL_CHOICES)
    entry_exit_price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    fees = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    comments = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.symbol} - {self.trade_date}"
