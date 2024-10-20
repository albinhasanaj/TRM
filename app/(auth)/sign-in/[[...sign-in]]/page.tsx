import { SignIn } from '@clerk/nextjs';

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[400px] flex-col justify-start items-center gap-8 inline-flex flex-1">
                {/* Sign Up Form */}
                <SignIn
                    path="/sign-in"
                    routing="path"
                    appearance={{
                        elements: {
                            card: 'shadow-md bg-[#ffffff] border border-[#e6e6e6] rounded-lg p-6',
                            formFieldInput: 'bg-[#f8fafc] border border-[#e0e0e0] text-[#132e2c] rounded-lg px-3 py-2 mb-4 text-sm focus:ring-2 focus:ring-[#30726f] focus:border-transparent',
                            formButtonPrimary: 'bg-[#30726f] text-white hover:bg-[#255956] w-full py-2 rounded-lg font-semibold',
                            socialButtonsIconButton: 'bg-[#ffffff] border border-[#e0e0e0] hover:bg-[#f8fafc] text-[#30726f] w-full py-2 rounded-lg mb-2',
                            footer: 'hidden',
                        },
                    }}
                />

                <div className="mt-4 text-center">
                    <span className="text-[#132e2c]/60 text-[14px] font-['Plus Jakarta Sans']">
                        Don't have an account?{' '}
                        <a href="/sign-up" className="text-[#30726f] font-semibold underline">
                            Sign up
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
