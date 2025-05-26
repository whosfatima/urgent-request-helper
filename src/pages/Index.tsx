
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Zap, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">سیستم پیام‌رسانی</h1>
            </div>
            <nav className="flex space-x-4 space-x-reverse">
              <Button variant="ghost">درباره ما</Button>
              <Button variant="ghost">تماس</Button>
              <Button>شروع کنید</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              سیستم هوشمند 
              <span className="text-blue-600 block">پیام‌رسانی فوری</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              بهترین راه‌حل برای ارتباط سریع و مؤثر با مشتریان. با پیام‌های از پیش تعریف شده، پاسخ‌دهی فوری و مدیریت هوشمند پیام‌ها.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                همین حالا شروع کنید
              </Button>
              <Button variant="outline" size="lg">
                مشاهده دمو
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              <img 
                src="/lovable-uploads/8dd31d65-92a2-49be-9262-8d2658c5d3dc.png" 
                alt="نمونه محصول" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              ویژگی‌های منحصربه‌فرد
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              سیستم پیام‌رسانی ما با امکانات پیشرفته و رابط کاربری ساده، تجربه‌ای بی‌نظیر برای شما فراهم می‌کند
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">پاسخ‌دهی فوری</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  با پیام‌های از پیش تعریف شده، در کمترین زمان به مشتریان پاسخ دهید
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">مدیریت هوشمند</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  سازماندهی و مدیریت پیام‌ها به صورت خودکار و بهینه
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">امنیت بالا</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  حفاظت کامل از اطلاعات و پیام‌های شما با بالاترین استانداردهای امنیتی
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              چگونه کار می‌کند؟
            </h3>
            <p className="text-xl text-gray-600">
              در سه مرحله ساده، شروع به استفاده کنید
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ۱
              </div>
              <h4 className="text-xl font-semibold mb-2">ثبت‌نام کنید</h4>
              <p className="text-gray-600">
                در کمتر از یک دقیقه حساب کاربری خود را ایجاد کنید
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ۲
              </div>
              <h4 className="text-xl font-semibold mb-2">پیام‌ها را تنظیم کنید</h4>
              <p className="text-gray-600">
                پیام‌های پیش‌فرض خود را ایجاد و سازماندهی کنید
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ۳
              </div>
              <h4 className="text-xl font-semibold mb-2">شروع کنید</h4>
              <p className="text-gray-600">
                با مشتریان خود ارتباط برقرار کنید و تجربه کنید
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-4">
            آماده برای شروع هستید؟
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            همین امروز تجربه‌ای متفاوت از پیام‌رسانی را آغاز کنید
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <Button size="lg" variant="secondary">
              شروع رایگان
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              تماس با فروش
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <MessageCircle className="h-6 w-6" />
                <span className="text-lg font-bold">سیستم پیام‌رسانی</span>
              </div>
              <p className="text-gray-400">
                بهترین راه‌حل برای ارتباط مؤثر با مشتریان
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">محصول</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ویژگی‌ها</li>
                <li>قیمت‌گذاری</li>
                <li>پشتیبانی</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">شرکت</h4>
              <ul className="space-y-2 text-gray-400">
                <li>درباره ما</li>
                <li>تماس</li>
                <li>کریر</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">قانونی</h4>
              <ul className="space-y-2 text-gray-400">
                <li>حریم خصوصی</li>
                <li>شرایط استفاده</li>
                <li>قوانین</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; ۱۴۰۳ سیستم پیام‌رسانی. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
