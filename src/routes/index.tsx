// ... existing imports ...
import VendorRegistration from '../components/vendor/VendorRegistration';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* ... existing routes ... */}
      
      <Route
        path="/vendor/register"
        element={
          <PrivateRoute>
            <VendorRegistration />
          </PrivateRoute>
        }
      />
      
      {/* ... existing routes ... */}
    </Routes>
  );
};

export default AppRoutes;