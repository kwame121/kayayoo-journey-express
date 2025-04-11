import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-4xl py-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy for Kayayooo</CardTitle>
          <p className="text-center text-muted-foreground">Effective Date: 2024/10/01</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-muted-foreground">
              Kayayooo ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App"). Please read this policy carefully. If you do not agree with the terms of this policy, please do not use the App.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-2">We collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Personal Identification Information:</strong> Full name, email address, phone number, and other contact information.</li>
              <li><strong>Geolocation Data:</strong> We collect your location to match you with courier services and ensure accurate deliveries.</li>
              <li><strong>Photographs and ID Verification:</strong> We require you to upload a photo of your government-issued ID for identity verification purposes.</li>
              <li><strong>Financial Data:</strong> We collect payment information such as credit card numbers, billing addresses, and other financial data to process transactions.</li>
              <li><strong>Usage Data:</strong> Data related to your activity within the App, such as pages visited, features used, and actions performed.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-2">We may use the information we collect in the following ways:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>To verify your identity and ensure compliance with local regulations (e.g., through ID verification).</li>
              <li>To facilitate transactions and process payments.</li>
              <li>To provide location-based services and ensure accurate courier tracking.</li>
              <li>To communicate with you about your orders, updates, or any changes to the App.</li>
              <li>To improve the App's functionality, troubleshoot issues, and conduct analytics on user behavior.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-2">We may share your information:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>With Third-Party Service Providers:</strong> For processing payments, verifying identity, or managing delivery operations.</li>
              <li><strong>With Law Enforcement:</strong> When required by law or in response to valid requests by public authorities.</li>
              <li><strong>In Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Security of Your Information</h2>
            <p className="text-muted-foreground">
              We take reasonable steps to secure your personal information against unauthorized access, use, or disclosure. However, please understand that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-2">Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Access:</strong> You have the right to request access to the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You may request that we correct any inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You may request the deletion of your personal data under certain circumstances.</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Please note that certain information may be retained as required by law or for legitimate business purposes.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our App is not intended for children under the age of 18. We do not knowingly collect personal information from children. If we discover that a child under 18 has provided us with personal information, we will delete it immediately.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
            <p className="text-muted-foreground mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="space-y-1 text-muted-foreground">
              <p><strong>Email:</strong> info@kayayooo.com</p>
              <p><strong>Address:</strong></p>
              <p>2 Whitney Street</p>
              <p>North Grafton</p>
              <p>Massachusetts</p>
              <p>01536</p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;