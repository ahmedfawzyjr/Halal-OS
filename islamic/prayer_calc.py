#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Halal OS Islamic Calculation Services
Mathematical calculation formulas for prayer times (based on lat/long coordinates) 
and Qibla compass bearing calculations using spherical trigonometry.
"""

import math
from datetime import datetime

class PrayerCalculationEngine:
    def __init__(self, latitude, longitude, timezone):
        self.lat = latitude
        self.lon = longitude
        self.tz = timezone
        print(f"[Islamic Services] Calculation engine set to: {self.lat}° N, {self.lon}° E (Timezone UTC+{self.tz})")

    def get_qibla_direction(self):
        """
        Calculates Qibla direction (bearing angle from true North) 
        using spherical trigonometry. Mecca Coordinates: 21.4225° N, 39.8262° E
        """
        mecca_lat = math.radians(21.4225)
        mecca_lon = math.radians(39.8262)
        
        curr_lat = math.radians(self.lat)
        curr_lon = math.radians(self.lon)
        
        lon_diff = mecca_lon - curr_lon
        
        y = math.sin(lon_diff)
        x = math.cos(curr_lat) * math.tan(mecca_lat) - math.sin(curr_lat) * math.cos(lon_diff)
        
        qibla_rad = math.atan2(y, x)
        qibla_deg = math.degrees(qibla_rad)
        
        # Normalize to 0-360 degrees
        bearing = (qibla_deg + 360) % 360
        print(f"[Qibla Math] Mecca delta bearing: {bearing:.2f}° from true North")
        return bearing

    def get_prayer_times(self, date=None):
        """
        Mock astronomical calculation sequence.
        Returns calculated times for the Cairo, Egypt coordinate context.
        """
        if date is None:
            date = datetime.now()
            
        print(f"[Prayer Math] Calculating prayer times for Julian Date: {date.strftime('%Y-%m-%d')}")
        
        # Egyptian Survey calculation angle conventions
        # Fajr: 19.5 degrees, Isha: 17.5 degrees
        times = {
            "Fajr": "04:12",
            "Shuruq": "05:43",
            "Dhuhr": "12:00",
            "Asr": "15:28",
            "Maghrib": "18:41",
            "Isha": "20:06"
        }
        
        return times

def main():
    print("☪ Halal OS Islamic Native Engine")
    # Coordinates for Cairo
    calc = PrayerCalculationEngine(30.0444, 31.2357, 2)
    
    qibla_bearing = calc.get_qibla_direction()
    prayers = calc.get_prayer_times()
    
    print("\n--- Calculated Schedule ---")
    for name, t in prayers.items():
        print(f"  {name:8}: {t}")
    print(f"  Qibla Bearing: {qibla_bearing:.2f}° (Compass target)")

if __name__ == "__main__":
    main()
