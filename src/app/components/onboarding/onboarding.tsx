'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stepper, Button, Group, Center } from '@mantine/core';
import CreateAccount from '../create-account/create-account';
import PersonalDetails from '../personal-details/personal-details';
import CompanyDetails from '../company-details/company-details';

export default function Onboarding() {
    const router = useRouter();
    const [active, setActive] = useState(0);
    const nextStep = () => {
        if (active === 3) {
            router.push('/login');
        }
        setActive((current) => (current < 4 ? current + 1 : current))
    };
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div style={{ marginTop: '4rem', marginRight: '8rem', marginLeft: '8rem' }}>
            <Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="Account details" description="Create an account">
                    <Center>
                        <CreateAccount />
                    </Center>
                </Stepper.Step>
                <Stepper.Step label="Personal details" description="Tell us more about yourself">
                    <Center>
                        <PersonalDetails />
                    </Center>
                </Stepper.Step>
                <Stepper.Step label="Company details" description="Tell us more about your company">
                    <Center>
                        <CompanyDetails />
                    </Center>
                </Stepper.Step>
                <Stepper.Completed>
                    <Center>
                        Completed, click back button to get to previous step
                    </Center>
                </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>{active === 3 ? "Complete" : "Next step"}</Button>
            </Group>
        </div>
    );
}